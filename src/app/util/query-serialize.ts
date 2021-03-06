export function querySerialize(obj: object, key?: string): string {
    let str = [];
    for (let p in obj) {
        if (obj.hasOwnProperty(p)) {
            if (typeof obj[p] !== 'object') {
                const v = encodeURIComponent(obj[p]);
                p = encodeURIComponent(p);
                str.push((key ? `${key}[${p}]` : p) + '=' + v);
            } else {
                const nested = querySerialize(obj[p], p);
                if (nested) {
                    str = str.concat(nested);
                }
            }
        }
    }
    return str.join('&');
};
