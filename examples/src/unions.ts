function printId(id: number | string) {
    if (typeof id === "number") {
        console.log("ID (number):", id);
    } else {
        console.log("ID (string):", id);
    }
}