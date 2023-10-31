import { dlopen, FFIType } from "bun:ffi";

console.log("Testing issue 6517 https://github.com/oven-sh/bun/issues/6517");

const rustlib = dlopen('./libadd.dylib', {
    math: {
        args: [FFIType.i32, FFIType.i32],
        returns: FFIType.i32
    },
});

console.log("lets do some addition via zig")
console.log("1 + 2 =", rustlib.symbols.math(1, 2))
