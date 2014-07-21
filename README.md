# rot13.io

## Requirements

- java 1.7+
- [boot][1]
- [leiningen][2]

## Development

1. From the root of the source tree, run:

         boot development

   This will watch for changes to the source files and automatically recompile the site.


2. Open the compiled site:

        open resources/public/index.html

## Production Build

1. From the root of the source tree, run:

        boot production

[1]: https://github.com/tailrecursion/boot
[2]: https://github.com/technomancy/leiningen
