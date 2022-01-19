export const parseURI = (uri: string, x: string, y: string) => {
    const horizontal = parseInt(x);
    const vertical = parseInt(y);

    const values = uri.split(',');
    const uniq = Array.from({ length: vertical }, () => Array.from({ length: horizontal }, () => 0 ));

    let itteration = 0;

    for (let i = 0; i < vertical; i++) {
        for(let j = 0; j < horizontal; j++) {
            uniq[i][j] = parseInt(values[itteration]);
            itteration++;
        }
    }

    return uniq;
};

export const generateUnique = (length, height) => 
    Array.from({ length: length }, () => Array.from({ length: height }, () => Math.random()*255 ));
