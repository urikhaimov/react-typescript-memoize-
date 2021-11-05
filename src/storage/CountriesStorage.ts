import Storage from './Storage';

enum Locals {
  ACCESS_Country = 'access_Country',
  REFRESH_Country = 'refresh_Country'
}

export default class Countries extends Storage<Locals> {
  private static instance?: Countries;

  private constructor() {
    super();
  }

  public static getInstance() {
    if (!this.instance) {
      this.instance = new Countries();
    }

    return this.instance;
  }

  public getAccessCountry() {
    return this.get(Locals.ACCESS_Country);
  }

  public setAccessCountry(accessCountry: string) {
    this.set(Locals.ACCESS_Country, accessCountry);
  }

  public getRefreshCountry() {
    return this.get(Locals.REFRESH_Country);
  }

  public setRefreshCountry(refreshCountry: string) {
    this.set(Locals.REFRESH_Country, refreshCountry);
  }

  public clear() {
    this.clearItems([Locals.ACCESS_Country, Locals.REFRESH_Country]);
  }
}