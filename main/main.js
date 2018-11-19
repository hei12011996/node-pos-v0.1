module.exports = function main(input) {


	let item_map = initializeItemMap(input);
	var total_charge = getTotalCharge(input);
	var output = "";

	output += '***<没钱赚商店>购物清单***\n';
	output += decomposeItemListToOutput(item_map);
	output += '----------------------\n';
	output += '总计：' + total_charge.toFixed(2) + '(元)\n';
	output += '**********************';

	return output;
};

function initializeItemMap(input){
	var item_map = [];
	input.forEach(function(item){
		if (item_map[item.barcode] == undefined) {
			let item_record = {name: item.name, unit: item.unit, count: 1, price: item.price.toFixed(2)};
			item_map[item.barcode] = item_record;
		} else {
			item_map[item.barcode].count++;
		}
	});
	return item_map;
}

function getTotalCharge(input){
	var total_charge = 0;
	input.forEach(item => total_charge += item.price);
	return total_charge;
}

function decomposeItemListToOutput(item_map){
	var output = "";

	for (const key in item_map) {
		item_record = item_map[key];
		output += generateItemRecordString(item_record);
	};

	return output;
}

function generateItemRecordString(item_record){
	return '名称：' + item_record.name + '，数量：' + item_record.count + item_record.unit + '，单价：' + item_record.price + '(元)，小计：' + (item_record.price * item_record.count).toFixed(2) + '(元)\n';

	// return '名称：${item_record.name}，数量：${item_record.count}${item_record.unit}，单价：${item_record.price}(元)，小计：${(item_record.price * item_record.count).toFixed(2)}(元)\n';
}