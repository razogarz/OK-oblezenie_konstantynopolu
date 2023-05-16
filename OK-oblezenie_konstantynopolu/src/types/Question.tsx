export class Question {
  id: number;
  que: string;
  ans: string | number;
  constructor(id: number, que: string, ans: string | number) {
    this.id = id;
    this.que = que;
    this.ans = ans;
  }
}
