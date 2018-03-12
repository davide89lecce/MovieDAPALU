export class Search {
    constructor(
      public page : number,
      public results: {
        release_date : string,
        id : number,
        original_title : string,
        title : string,
    }[],
      public total_results: number,
      public total_pages: number
      ) { }
  }
  