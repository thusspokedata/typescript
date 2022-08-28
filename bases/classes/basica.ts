(() => {
  class Avenger {
    private name: string; //private means that I just gonna have access to this property inside the class
    public team: string;
    public realName?: string;
    static avgAge: number = 35;

    constructor(name: string, team: string, realName?: string) {
      this.name = name;
      this.team = team;
      this.realName = realName;
    }
  }

  const antman: Avenger = new Avenger("Antman", "Capitan");
  console.log(antman);
  console.log(Avenger.avgAge); //static properties can be access globally calling the class but not the instance
})();
