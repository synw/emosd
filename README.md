# Emosd

Emoji based semantic debuging

- **Debug the state** and execution flow of your program using familiar idioms
- **Scoped debuging**: activate emo locally
- **Hooks**: callback to execute after logging

## Example

   ```javascript
   import Emo from "@/emo";

   const emo = new Emo();

   emo.state("A state operation");
   emo.save("Saving something");
   emo.delete("Deleting something");
   emo.update("Updating something");
   emo.ok("Everything is ok");
   ```

## Scoped debuging

The recommended way is to use local `Emo` instances to be able to enable and disable debug messages for a defined portion of code. Use the `zone` attribute to prefix the messages:

   ```javascript
   const emo = new Emo({ zone: "api" });
   // the messages will be prefixed by [api] :
   emo.notFound(`page not found: ${path}`);
   // output:
   // 🚫 [api] Page not found: /some_page.html
   ```

## Deactivation of output

It is possible to deactivate the printing of the messages for an instance:

   ```javascript
   const emo = new Emo({ deactivatePrint: true });
   ```

## Hooks

Callbacks to execute after logging. Ex:

   ```javascript
   const emo = new Emo({ 
     hook: (msg) => { console.log(`Hook with message ${msg}`); }
   });
   ```