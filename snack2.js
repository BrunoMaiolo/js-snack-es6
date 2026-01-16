//array di squadre//
const teams = [
    {nome: "Inter", punti: 0, falliSubiti: 0  },
    {nome: "Milan", punti: 0, falliSubiti: 0},
    {nome: "Napoli", punti: 0, falliSubiti: 0},
    {nome: "Juventus", punti: 0, falliSubiti: 0},
    {nome: "Roma", punti: 0, falliSubiti: 0}
];

//generare numeri random//
teams.forEach(team => {
    team.punti = Math.floor(Math.random() * 100);
    team.falliSubiti = Math.floor(Math.random() * 50);
});

//nuovo array con nome e falli subiti//
const teamsFouls = [];

for (let i = 0; i < teams.length; i++) {
  teamsFouls.push({
    nome: teams[i].nome,
    falliSubiti: teams[i].falliSubiti
  });
}

//stampa//
console.log("Squadre con punti e falli subiti", teams);
