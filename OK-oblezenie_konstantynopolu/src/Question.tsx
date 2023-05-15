export class Question {
  id: number;
  que: string;
  ans: string;
  constructor(id: number, que: string, ans: string) {
    this.id = id;
    this.que = que;
    this.ans = ans;
  }
}
