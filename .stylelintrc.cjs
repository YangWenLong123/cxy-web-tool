/*
 * @Author: along
 * @Description:
 * @Date: 2023-05-30 21:31:24
 * @LastEditors: along
 * @LastEditTime: 2023-06-08 21:08:21
 * @FilePath: /cxy-web-tool/.stylelintrc.cjs
 */
module.exports = {
	root: true,
	extends: [
		'stylelint-config-standard',
		'stylelint-config-rational-order',
		// 'stylelint-config-prettier',
		'stylelint-config-html/vue' // 需要放在最后一位
	],
	defaultSeverity: 'warning',
	plugins: ['stylelint-order'],
	rules: {
		'no-empty-source': null,
		'selector-class-pattern': null
	},
	overrides: [
		{
			files: ['*.vue', '**/*.vue'],
			rules: {
				// 'selector-pseudo-class-no-unknown': [
				// 	true,
				// 	{
				// 		ignorePseudoClasses: ['deep', 'global']
				// 	}
				// ],
				// 'selector-pseudo-element-no-unknown': [
				// 	true,
				// 	{
				// 		ignorePseudoElements: ['v-deep', 'v-global', 'v-slotted']
				// 	}
				// ]
			}
		}
	]
}