exports.glucoseDecisionPath = (obj) => {
  const path = [];
  let glucose = '';
  let insulin = '';
  let hba1c = '';
  let biliggt = '';
  let tag = '';

  if (obj.glucose >= 90) {
    glucose += 'highGlucose';
  } else if (obj.glucose <= 70) {
    glucose += 'lowGlucose';
  } else {
    glucose += 'normalGlucose';
  }

  path.push(glucose);

  if (obj.insulin) {
    const homa = ((obj.insulin * obj.glucose) / 22.5);
    if (homa > 1.5) {
      insulin += 'insulinProvided.ir';
    } else {
      insulin += 'insulinProvided.notIR';
      path.push(insulin);
      return path.join('.');
      // GIVE QUESTION 1
    }
  } else {
    insulin += 'insulinNotProvided';
  }

  path.push(insulin);

  if (obj.hba1c) {
    if (obj.hba1c <= 5.1) {
      hba1c += 'hba1cProvided.notDiabetic';
    } else if (obj.hba1c >= 6.5) {
      hba1c += 'hba1cProvided.diabetic';
    } else if (obj.hba1c >= 5.2 && obj.hba1c <=5.6) {
      hba1c += 'hba1cProvided.slipping';
    } else {
      hba1c += 'hba1cProvided.preDiabetic';
    }
  } else {
    hba1c += 'hba1cNotProvided';
  }

  path.push(hba1c);

  if (obj.bilirubin) {
    biliggt += 'bilirubinProvided';
    if (obj.ggt) {
      biliggt += '.ggtProvided';
      if (obj.bilirubin < 0.4 && obj.ggt > 23) {
        biliggt += '.bothHigh';
        path.push(biliggt);
        return path.join('.');
        // SEND RESPONSE FROM TABLE
      } else if (obj.bilirubin < 0.4 || obj.ggt > 23) {
        biliggt += '.oneHigh';
      } else {
        biliggt += '.neitherHigh';
      }
    } else {
      biliggt += '.ggtNotProvided';
    }
  } else {
    biliggt += 'bilirubinNotProvided';
    if (obj.ggt) {
      biliggt += '.ggtProvided';
      /// INSERT LOGIC HERE AND THIS IS THE LAST ONE ---------------
    } else {
      biliggt += '.ggtNotProvided';
      path.push(biliggt);
      return path.join('.');
      // SEND RESPONSE FROM TABLE
    }
  }

  path.push(biliggt);

  if (obj.tag) {
    if (obj.tag > 80) {
      tag += 'tagProvided.high';
    } else {
      tag += 'tagProvided.normal';
    }
  } else {
    tag += 'tagNotProvided';
  }

  path.push(tag);

  // console.log(path.join('.'));
  return path.join('.');

}


// const test = {
//   id: 1,
//   email: 'example@email.com',
//   glucose: 107,
//   insulin: 5.6,
//   hba1c: 5.7,
//   bilirubin: 0.5,
//   ggt: 20,
//   tag: 86
// }
// glucoseDecisionPath(test);