# issue-6517

To test Rust


`bun rust`

expected output on Mac arm64:


```
$ rustc --crate-type cdylib ./math.rs && file libmath* && bun rust_index.ts
libmath.dylib:   Mach-O 64-bit dynamically linked shared library arm64
libmath.dylib.o: Mach-O 64-bit object arm64
Testing issue 6517 https://github.com/oven-sh/bun/issues/6517
lets do some addition via rust
1 + 2 = 3
```

using `rustc 1.72.1 (d5c2e9c34 2023-09-13) (Homebrew)`
and bun `1.0.7`
and env var `DYLD_LIBRARY_PATH` not set (default condition in new shell)

--------------------------------------

To test Zig

`bun zig`

expected output on Mac arm64:

```
$ zig build-lib add.zig -dynamic -OReleaseFast && file libadd* && bun zig_index.ts
libadd.dylib:   Mach-O 64-bit dynamically linked shared library arm64
libadd.dylib.o: Mach-O 64-bit object arm64
Testing issue 6517 https://github.com/oven-sh/bun/issues/6517
lets do some addition via zig
1 + 2 = 3
```

using zig version `0.11.0`
and bun `1.0.7`
and env var `DYLD_LIBRARY_PATH` not set (default condition in new shell)
