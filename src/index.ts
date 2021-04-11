import { EmoParams } from './interfaces';
import { EmoHook } from './types';

export default class Emo {
  /// Deactivate the debug session
  ///
  /// This will not print anything anymore
  public deactivatePrint: boolean;

  /// The debug zone
  ///
  /// An optional indication about a local debug area. It
  /// will prefix the messages
  public zone: string | null;

  /// A hook to execute after each function call
  ///
  /// Can be used to pipe the emodebug messages to logging
  public hook: EmoHook | null;

  /// Deactivate the emojis
  ///
  /// This will not print the emojis in the log messages
  public deactivateEmojis: boolean;

  /// Default constructor
  public constructor({
    zone = null,
    deactivatePrint = false,
    deactivateEmojis = false,
    hook = null
  }: EmoParams) {
    this.zone = zone;
    this.deactivatePrint = deactivatePrint;
    this.deactivateEmojis = deactivateEmojis;
    this.hook = hook;
  }

  /// A debug message for a state operation
  ///
  /// emoji: 📢
  state(obj?: any, domain?: string): string { return this.emo("📢", obj, domain); } // eslint-disable-line 

  /// A debug message for a save operation
  ///
  /// emoji: 💾
  save(obj?: any, domain?: string): string { return this.emo("💾", obj, domain); } // eslint-disable-line

  /// A debug message for a delete operation
  ///
  /// emoji: ❌
  delete(obj?: any, domain?: string): string { return this.emo("❌", obj, domain); } // eslint-disable-line

  /// A debug message for a database query
  ///
  /// emoji: 🗄️
  query(obj?: any, domain?: string): string { return this.emo("🗄️", obj, domain); } // eslint-disable-line

  /// A debug message for a dataset
  ///
  /// emoji: 💼
  data(obj?: any, domain?: string): string { return this.emo("💼", obj, domain); } // eslint-disable-line

  /// A debug message representing a line
  ///
  /// emoji: ➖
  line(obj?: any, domain?: string): string { return this.emo("➖", obj, domain); } // eslint-disable-line

  /// A debug message for an initialization
  ///
  /// emoji: 🎬
  init(obj?: any, domain?: string): string { return this.emo("🎬", obj, domain); } // eslint-disable-line

  /// A debug message for an update
  ///
  /// emoji: 🆙
  update(obj?: any, domain?: string): string { return this.emo("🆙", obj, domain); } // eslint-disable-line

  /// A debug message for an ok state
  ///
  /// emoji: 🆗
  ok(obj?: any, domain?: string): string { return this.emo("🆗", obj, domain); } // eslint-disable-line

  /// A debug message for an build
  ///
  /// emoji: 🔧
  build(obj?: any, domain?: string): string { return this.emo("🔧", obj, domain); } // eslint-disable-line

  /// A debug message for parameters
  ///
  /// emoji: 📥
  param(obj?: any, domain?: string): string { return this.emo("📥", obj, domain); } // eslint-disable-line

  /// A debug message for a class constructor
  ///
  /// emoji: 🛠️
  aconstructor(obj?: any, domain?: string): string { return this.emo("🛠️", obj, domain); } // eslint-disable-line

  /// A debug message for a time related operation
  ///
  /// emoji: ⏱️
  time(obj?: any, domain?: string): string { return this.emo("⏱️", obj, domain); } // eslint-disable-line

  /// A debug message for a not found status
  ///
  /// emoji: 🚫
  notFound(obj?: any, domain?: string): string { return this.emo("🚫", obj, domain); } // eslint-disable-line

  /// A debug message for a found status
  ///
  /// emoji: 👁️‍🗨️
  found(obj?: any, domain?: string): string { return this.emo("👁️‍🗨️", obj, domain); } // eslint-disable-line

  /// A debug message for a result
  ///
  /// emoji: 📌
  result(obj?: any, domain?: string): string { return this.emo("📌", obj, domain); } // eslint-disable-line

  /// A debug message for information an input operation
  ///
  /// emoji: 📥
  input(obj?: any, domain?: string): string { return this.emo("📥", obj, domain); } // eslint-disable-line

  /// A debug message for information an output operation
  ///
  /// emoji: 📤
  output(obj?: any, domain?: string): string { return this.emo("📤", obj, domain); } // eslint-disable-line

  /// A debug message for a function
  ///
  /// emoji: 💊
  function(obj?: any, domain?: string): string { return this.emo("💊", obj, domain); } // eslint-disable-line

  /// A debug message for a key
  ///
  /// emoji: 🔑
  key(obj?: any, domain?: string): string { return this.emo("🔑", obj, domain); } // eslint-disable-line

  /// A debug message for an access token
  ///
  /// emoji: 🔑
  accessToken(obj?: any, domain?: string): string { return this.emo("🔑", obj, domain); } // eslint-disable-line

  /// A debug message for an refresh token
  ///
  /// emoji: 🗝️
  refreshToken(obj?: any, domain?: string): string { return this.emo("🗝️", obj, domain); } // eslint-disable-line

  /// A debug message for an encryption operation
  ///
  /// emoji: 🎼
  encrypt(obj?: any, domain?: string): string { return this.emo("🎼", obj, domain); } // eslint-disable-line

  /// A debug message for an decryption operation
  ///
  /// emoji: 🗝️
  decrypt(obj?: any, domain?: string): string { return this.emo("🗝️", obj, domain); } // eslint-disable-line

  /// A debug message for a transmission operation
  ///
  /// emoji: 📡
  transmit(obj?: any, domain?: string): string { return this.emo("📡", obj, domain); } // eslint-disable-line

  /// A debug message for a start operation
  ///
  /// emoji: 🏁
  start(obj?: any, domain?: string): string { return this.emo("🏁", obj, domain); } // eslint-disable-line

  /// A debug message for a stop operation
  ///
  /// emoji: 🛑
  stop(obj?: any, domain?: string): string { return this.emo("🛑", obj, domain); } // eslint-disable-line

  /// A debug message for an info
  ///
  /// emoji: ℹ️
  info(obj?: any, domain?: string): string { return this.emo("ℹ️", obj, domain); } // eslint-disable-line

  /// A debug message for a warning
  ///
  /// emoji: 🔔
  warning(obj?: any, domain?: string): string { return this.emo("🔔", obj, domain); } // eslint-disable-line

  /// A debug message for a warning
  ///
  /// emoji: 💢
  error(obj?: any, domain?: string): string { return this.emo("💢", obj, domain); } // eslint-disable-line

  /// A debug message with an arrow
  ///
  /// emoji: =>
  arrowIn(obj?: any, domain?: string): string { return this.emo("=>", obj, domain); } // eslint-disable-line

  /// A debug message with an arrow
  ///
  /// emoji: <=
  arrowOut(obj?: any, domain?: string): string { return this.emo("<=", obj, domain); } // eslint-disable-line

  /// A debug message with an arrow
  ///
  /// emoji: ->
  smallArrowIn(obj?: any, domain?: string): string { return this.emo("->", obj, domain); } // eslint-disable-line

  /// A debug message with an arrow
  ///
  /// emoji: <-
  smallArrowOut(obj?: any, domain?: string): string { return this.emo("<-", obj, domain); } // eslint-disable-line

  /// A debug message with an arrow
  ///
  /// emoji: 🔷
  requestGet(obj?: any, domain?: string): string { return this.emo("🔷", obj, domain); } // eslint-disable-line

  /// A debug message with an arrow
  ///
  /// emoji: 🔶
  requestPost(obj?: any, domain?: string): string { return this.emo("🔶", obj, domain); } // eslint-disable-line

  /// A debug message for a ready state
  ///
  /// emoji: ⏲️
  ready(obj?: string, domain?: string) {

    if (obj === undefined) {
      obj = "ready";
    }
    return this.emo("⏲️", obj, domain);
  } // eslint-disable-line

  /// A debug message for a file
  ///
  /// emoji: 📃
  file(obj?: any, domain?: string): string { return this.emo("📃", obj, domain); } // eslint-disable-line

  /// A debug message for a folder
  ///
  /// emoji: 📁
  folder(obj?: any, domain?: string): string { return this.emo("📁", obj, domain); } // eslint-disable-line

  /// A debug message for a question
  ///
  /// emoji: ❓
  question(obj?: any, domain?: string): string { return this.emo("❓", obj, domain); } // eslint-disable-line

  /// A simple message with no emoji
  msg(obj?: any, domain?: string): string { return this.emo("", obj, domain); } // eslint-disable-line

  /// A separator line
  sep(): string {
    const msg = "➖➖➖➖➖➖➖➖➖➖➖";
    if (!this.deactivatePrint) {
      console.log(msg);
    }
    return msg;
  }

  /// A section start
  section(name: string): string {
    const msg = `➖➖➖➖➖ ${name} ➖➖➖➖➖`;
    if (!this.deactivatePrint) {
      console.log(msg);
    }
    return msg;
  }

  /// A section end
  sectionEnd(): string { return this.sep() }

  /// Print a debug message from an emoji
  emo(emoji: string, obj?: any, domain?: string): string { // eslint-disable-line
    const msg = this._getEmoString(emoji, obj, domain);
    if (!this.deactivatePrint) {
      console.log(msg);
    }
    if (this.hook != null) {
      this.hook(msg);
    }
    return msg;
  }

  print(data: Array<any> | Record<string, any>) { // eslint-disable-line
    Emo.json(data);
  }

  static json(data: Array<any> | Record<string, any>) { // eslint-disable-line
    console.log(JSON.stringify(data, null, "  "));
  }

  private _getEmoString(emoji: string, obj?: any, domain?: string): string { // eslint-disable-line
    const l = new Array<string>();
    if (!this.deactivateEmojis && emoji != null) {
      l.push(`${emoji}`);
    }
    if (this.zone != null) {
      l.push(`[${this.zone}]`);
    }
    if (domain != null) {
      const dm = `${domain[0].toUpperCase()}${domain.substring(1)}:`;
      l.push(dm);
    }
    if (obj != null) {
      l.push(`${obj}`);
    }
    return l.join(" ");
  }
}
