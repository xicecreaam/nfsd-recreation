const { execSync } = require('child_process');
const readline = require('readline');

// Fonction pour exécuter les commandes shell
function run(cmd) {
  console.log(`\n$ ${cmd}`);
  try {
    execSync(cmd, { stdio: 'inherit' });
  } catch (err) {
    console.error(`Erreur sur la commande: ${cmd}`);
    process.exit(1);
  }
}

// Demander le message de commit
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Message de commit: ', (msg) => {
  if (!msg) {
    console.log('Commit annulé: aucun message fourni.');
    rl.close();
    process.exit(0);
  }

  // Git add, commit et push
  run('git add .');
  run(`git commit -m "${msg}" || echo "Rien à commit"`);
  run('git push');

  // Build et deploy
  run('yarn build');
  run('USE_SSH=true yarn deploy');

  console.log('\n✅ Site mis à jour et déployé !');
  rl.close();
});
