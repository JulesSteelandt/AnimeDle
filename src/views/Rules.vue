<template>
  <div class='flex h-[93vh] items-center justify-center bg-main text-white '>
    <v-container class='max-w-2xl rounded-lg p-8 shadow-md ma-5 max-h-full overflow-auto bg-second'>
      <h2 class='mb-4 font-Lemon text-3xl'>Comment jouer :</h2>

      <v-col class='mb-8'>
        <h3 class='mb-2 font-Lemon text-xl'>Classic :</h3>
        <p class='font-Itim text-xl'>
          Le mode Classic consiste à deviner le titre d'un anime ou d'un manga à partir de son affiche flouté. Vous
          avez 3 vies, et chaque mauvaise réponse vous en fait perdre une. Si vous perdez toutes vos vies, vous perdez
          la partie.
        </p>
      </v-col>
      <v-col>
        <h3 class='mb-2 font-Lemon text-xl'>Guess :</h3>
        <p class='font-Itim text-xl'>
          Le mode Guess consiste à deviner le titre d'un anime ou d'un manga à partir des informations fournis. Vous
          avez 7 vies, chaque anime que vous rentrez vous donnera des indices sur l'anime que vous devez deviner à
          l'aide de son studio, ses dates... Si vous perdez toutes vos vies, vous perdez la partie.
        </p>
      </v-col>
    </v-container>
  </div>
</template>;
