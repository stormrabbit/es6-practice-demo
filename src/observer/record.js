const reocordAgent = async (records, fileName, mark = '') => {
    const recordsObj = records.reduce((pre, cur) => {
        key++;
        pre[key] = cur;
        return pre;
    }, {});
    const stringbuffer = `,${JSON.stringify(recordsObj).substring(1, JSON.stringify(recordsObj).length -1)}`;
    await fsTools.insertFilePlus(fileName, stringbuffer, mark);

}

export default reocordAgent;