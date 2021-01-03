function solve(n, input) {
  let numberOfPieces = n;
  console.log(numberOfPieces);
  for (let i = 0; i < numberOfPieces; i++) {
    let [piece, composer, key] = input.split("|");
    console.log(piece + " " + composer + " " + key);
  }
}

console.log(
  solve(
    3,
    "Fur Elise|Beethoven|A Minor Moonlight Sonata|Beethoven|C# Minor Clair de Lune|Debussy|C# Minor Add|Sonata No.2|Chopin|B Minor Add|Hungarian Rhapsody No.2|Liszt|C# Minor Add|Fur Elise|Beethoven|C# Minor Remove|Clair de Lune ChangeKey|Moonlight Sonata|C# Major"
  )
);
