#!/usr/bin/env node

const util = require('util');
const exec = util.promisify(require('child_process').exec);

class BaseLogger {
  oiptions;

  constructor({ logDate = true, logUser = true }) {
    this.options = { logDate, logUser };
  }

  get delimiter() {
    return ';';
  }

  get prefix() {
    let prefix = ``;
    prefix = this.options.logDate ? `${prefix}${new Date().toISOString()}${this.delimiter}` : prefix;
    prefix = this.options.logUser ? `${prefix}${process.env.USER}${this.delimiter}` : prefix;
    return prefix;
  }

  format(message) {
    return `${this.prefix}${message.join(' ')}`;
  }

  formatErrorMessage(errorMessage) {
    // replace new lines with a white space
    return JSON.stringify(errorMessage.join(' '));
  }

  async clear() {
    // abstract
  }

  async log(message) {
    // abstract
  }

  async error(message) {
    // abstract
  }
}

class ConsoleLogger extends BaseLogger {
  constructor() {
    super({ logDate: false, logUser: false });
  }

  async clear() {
    console.clear();
  }

  async log(...message) {
    console.log(this.format(message));
  }

  async error(...message) {
    const errorMessage = this.formatErrorMessage(message);
    console.error(this.format(errorMessage));
  }
}

class FileLogger extends BaseLogger {
  defaultPath = `${process.cwd()}/${process.env.USER}-log.csv`;
  _path;

  get path() {
    return this._path;
  }

  set path(value) {
    this._path = value;
  }

  constructor(path) {
    super({ logDate: true, logUser: true });
    this.path = path ?? this.defaultPath;
  }

  async clear() {
    await exec(`echo '[DATE]${this.delimiter}[USER]${this.delimiter}[ACTION]' > ${this.path}`);
  }

  async log(...message) {
    await exec(`echo '${this.format(message)}' >> ${this.path}`);
  }

  async error(...message) {
    await this.log(this.formatErrorMessage(message));
  }
}

module.exports = {
  ConsoleLogger,
  FileLogger,
};
