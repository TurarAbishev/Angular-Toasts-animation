export class Toast {

  constructor(
    public title: string,
    public content: string,
    public type: string,
    public initialDuration: number,
    public duration: number,
    public showDuration: boolean,
    public verticalPosition: string,
    public horizontalPosition: string
  ) {
  }
}
