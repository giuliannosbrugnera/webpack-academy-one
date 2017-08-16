class ExamplePlugin {
    apply(compiler) {
        compiler.plugin("run", (compiler, callback) => {
            console.log(`Webpack is running...`);
        });
    }
}

module.exports = ExamplePlugin;