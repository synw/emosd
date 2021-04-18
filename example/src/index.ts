import Emo from "./emosd";

const emo = new Emo();
const zone2 = new Emo({ zone: "zone2" });
const zone3 = new Emo({ zone: "zone3", hook: (v) => { console.log("Zone 3 hook for", v) } });

async function run() {
  emo.section("Run");
  emo.state("A state operation");
  emo.save("Saving something", { foo: "bar" });
  emo.delete("Deleting something");
  emo.update("Updating something");
  emo.ok("Everything is ok");
  zone2.start("Start");
  zone2.transmit({ foo: "bar" });
  zone2.notFound("Something not found");
  zone3.warning("a warning");
}

run();
