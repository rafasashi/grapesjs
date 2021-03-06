define(['backbone', './Asset'],
	function (Backbone, Asset) {
		/**
		 * @class AssetImage
		 * */
		return Asset.extend({

			defaults: _.extend({}, Asset.prototype.defaults, {
				type: 		'image',
				unitDim:	'px',
				height:		0,
				width:		0,
			}),

		});
});
