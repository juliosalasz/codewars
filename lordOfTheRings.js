function goodVsEvil(good, evil) {
  //good array in position: 0 = hobbits, 1 = Men, 2 = Elves, 3= Dwarvers, 4= Eagles, 5= Wizards
  //evil array in position: 0 = Orcs, 1 = Men, 2 = Wargs, 3= Goblins, 4= UrukHai, 5= Trolls, 6=Wizards

  //good is going to be an string 1 1 1 1 1 1
  const goodArray = good.split(" ");
  const evilArray = evil.split(" ");

  //must come out [1,1,1,1,1]
  const hobbitPoints = Number(goodArray[0]) * 1;
  const menPoints = Number(goodArray[1]) * 2;
  const elvesPoints = Number(goodArray[2]) * 3;
  const dwarvesPoints = Number(goodArray[3]) * 3;
  const eaglesPoints = Number(goodArray[4]) * 4;
  const wizardsPoints = Number(goodArray[5]) * 10;

  const orcPoints = Number(evilArray[0]) * 1;
  const evilMenPoints = Number(evilArray[1]) * 2;
  const wargsPoints = Number(evilArray[2]) * 2;
  const goblinsPoints = Number(evilArray[3]) * 2;
  const urukHaiPoints = Number(evilArray[4]) * 3;
  const trollPoints = Number(evilArray[5]) * 5;
  const evilWizardPoints = Number(evilArray[6]) * 10;

  //Then compare the two point results and Give a battle result
  const goodSidePoints =
    hobbitPoints +
    menPoints +
    elvesPoints +
    dwarvesPoints +
    eaglesPoints +
    wizardsPoints;
  const evilSidePoints =
    orcPoints +
    evilMenPoints +
    wargsPoints +
    goblinsPoints +
    urukHaiPoints +
    trollPoints +
    evilWizardPoints;
  if (goodSidePoints > evilSidePoints) {
    return "Battle Result: Good triumphs over Evil";
  }
  if (goodSidePoints < evilSidePoints) {
    return "Battle Result: Evil eradicates all trace of Good";
  }
  if (goodSidePoints === evilSidePoints) {
    return "Battle Result: No victor on this battle field";
  }
}
