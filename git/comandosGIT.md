git init
- Inicia novo projeto com git

git add <nome-arquivo> ou git add .
- add os arquivos que estão prontos para serem comitados

git commit -m "mensagem commit"
- commit os arquivos no historico

git log
- mostra os últimos commits (últimas alterações)

git status
- como está o estado da nossa ramificações

git diff
- mostra o que foi alterado, mostra a diferença do antigo pro novo

git merge <nome-da-branch>
- merge de ramificações, mescla elas

git branch
- mostra a branch atual

git ckeckout <nome-da-branch>
- muda pra essa branch

git checkout -b <nome-da-branch>
- vai criar uma nova branch a partir da branch atual que estamos

git remote add <nome><url>
- add um novo repositório remoto

git push <nome><nome-da-branch>
- manda nossas alterações locais para o repositório remoto

git pull <nome><nome-da-branch>
- pega as alterações do repositório REMOTO e joga pra nossa máquina

git fetch
- atualiza o nosso histório local de acordo com o histórico salvo la no repositório