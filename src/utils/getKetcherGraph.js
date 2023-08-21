export default (abMol, mol) => {
  if (!abMol || abMol === 'null' || abMol === '{}') {
    return mol;
  }
  return abMol || mol;
};
