type StringOrEmpty = string | undefined;

export class Book {
  // title: StringOrEmpty;
  // year: number | undefined;
  // author: StringOrEmpty;
  pages?: number;
  description?: string;

  price?: number;

  constructor(public title: string, public year: number,
              public author: string) {
  }
}
