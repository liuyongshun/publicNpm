// require all test files (files that ends with .spec.js)
const testsContext = require.context('./', true, /\.spec$/)
testsContext.keys().forEach(testsContext)
console.log(testsContext, '9999999')
// require all src files except main.js for coverage.
// you can also change this to match only the subset of files that
// you want coverage for.
const srcContext = require.context('../src', true, /\.js$/)
srcContext.keys().forEach(srcContext)
console.log(srcContext, '77777777')