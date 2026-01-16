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


