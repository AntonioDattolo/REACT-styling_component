# React-Styling_Component

Hi! Un semplice esercizio per prendere la mano con gli 'styled-components' , i conditional styles e Tailwind CSS.
Dopo aver scaricato la repo in locale effettuare i seguenti passaggi:

 - npm i
 - npm run dev
 
 
# Tailwind CSS

Per Installare Tailwind :

 - npm install -D tailwindcss postcss autoprefixer
 - npx tailwindcss init -p
 
Successivamente riavviare il server di sviluppo con il comando : npm run dev

##  Aggiungi i 'paths' nel file `tailwind.config.js` .

    export  default  { content:  [ "./index.html", "./src/**/*.{js,ts,jsx,tsx}", ], 
					    theme:  { extend:  {fontFamily:{
											title : ['"Pacifico"', 'cursive']}
							},
						 }, 
					    plugins:  [], }


## Successivamente riavviare il server di sviluppo con il comando : npm run dev

<img src="./preview/Screenshot 2024-10-10 185934.png">