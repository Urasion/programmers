function solution(new_id) {
    new_id = new_id.toLowerCase();
    new_id = new_id.replace(/[^\w\-\.]/g, "")
    new_id = new_id.replace(/\.\.+/g, ".")
    new_id = new_id.replace(/^\.|\.$/g, "")
    new_id = new_id.length === 0 ? 'a' : new_id
    new_id = new_id.length >= 16 ? new_id.slice(0,15).replace(/\.$/, "") : new_id
    new_id = new_id.padEnd(3, new_id[new_id.length-1])
    return new_id;
}
