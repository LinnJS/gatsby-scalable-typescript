/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const requireEsm = require('esm')(module);
module.exports = requireEsm('./gatsby-node.esm.js');
