module.exports = function main(input) {
	var item_map = [];
	var item_index = [];
	var total_charge = 0;
	var output = "";

	output += '***<没钱赚商店>购物清单***\n';

	input.forEach(function(item){
		if (item_map[item.barcode] == undefined) {
			var item_record = {name: item.name, unit: item.unit, count: 1, price: item.price.toFixed(2)};
			item_map[item.barcode] = item_record;
			item_index.push(item.barcode);
		} else {
			item_map[item.barcode].count++;
		}
	});

	for (var i = 0; i < item_index.length; i++) {
		var item_record = item_map[item_index[i]];
		output += '名称：' + item_record.name + '，数量：' + item_record.count + item_record.unit + '，单价：' + item_record.price + '(元)，小计：' + (item_record.price * item_record.count).toFixed(2) + '(元)\n';
		total_charge += item_record.price * item_record.count;
	};

	output += '----------------------\n';
	output += '总计：' + total_charge.toFixed(2) + '(元)\n';
	output += '**********************';

	return output;
};