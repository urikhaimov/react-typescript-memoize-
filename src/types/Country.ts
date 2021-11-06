export interface Country {
  name: {
    common: string,
    official: string
  };
  flags: {
    png: string,
    svg: string
  };
  idd: {
    root: string,
    suffixes: Array<Number>
  };
 
}
