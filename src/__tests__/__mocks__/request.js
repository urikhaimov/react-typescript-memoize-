const countries = [
    {
        name: {
            common: 'Wonderland',
            official: 'Wonderland'
        },
        flags: {
            png: 'png',
            svg: 'png'
        },
        idd: {
            root: '+5',
            suffixes: ['0']
        },
    },
    {
        name: {
            common: 'Narnia',
            official: 'Narnia'
        },
        flags: {
            png: 'png',
            svg: 'png'
        },
        idd: {
            root: '+5',
            suffixes: ['0']
        }
    }


]

export default function request() {
    return new Promise((resolve, reject) => {
        process.nextTick(() =>
           countries.length
                ? resolve(countries)
                : reject({
                    error: 'Error',
                }),
        );
    });
}

it('works with promises', () => {
    expect(countries.length).toEqual(2)
  });