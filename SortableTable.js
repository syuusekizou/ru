const sortObj = new SortableTable();

//並び変えるテーブルを設定 
sortObj.setTable(document.querySelector('#my-table1'));

//id=urlの項目にリンクを設定
sortObj.setCellRenderer((col, row) => {
    const colValue = row[col.id];
    // cell-is-a-header
    if (col.isHeader) {
        if (typeof colValue !== 'undefined') {
            return `<th>${colValue}</th>`;
        }
        return '<th></th>';
    }
    // cell-is-not-a-header
    if (typeof colValue !== 'undefined') {
        if (col.id === 'url') {
            return `<td><a href="${colValue}" target="_blank">${colValue}</a></td>`;
        }
        return `<td>${colValue}</td>`;
    }
    return '<td></td>';
});

//データ設定
let items = [];
let index = 1;
singableList.forEach(x => items.push({ id: index++, name: x[0], lyricist: x[1], karaoke: x[2], original: x[3] }));
sortObj.setData(items);

// button handlers
document.querySelector('#btnReset')
    .addEventListener('click', () => {
        sortObj.resetData();
    });
