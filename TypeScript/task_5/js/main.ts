interface MajorCredits { credits: number; _majorBrand: "major"; }
interface MinorCredits { credits: number; _minorBrand: "minor"; }

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return { credits: subject1.credits + subject2.credits, _majorBrand: "major" };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return { credits: subject1.credits + subject2.credits, _minorBrand: "minor" };
}

// Demo
console.log(sumMajorCredits({ credits: 3, _majorBrand: "major" }, { credits: 4, _majorBrand: "major" }));
console.log(sumMinorCredits({ credits: 1, _minorBrand: "minor" }, { credits: 2, _minorBrand: "minor" }));
