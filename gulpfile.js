const gulp = require('gulp');
const path = require('path');
const fs = require('fs');

gulp.task('clean-old-bundles', async function () {
  const { deleteAsync } = await import('del');
  const bundleDir = path.join('server', 'public');
  
  // Récupérer tous les fichiers dans le dossier de bundle, sauf ceux dans 'images'
  const files = fs.readdirSync(bundleDir)
    .map(file => ({
      name: file,
      path: path.join(bundleDir, file),
      time: fs.statSync(path.join(bundleDir, file)).mtime.getTime() // Obtenir la date de modification
    }))
    .filter(file => !file.path.includes(path.join(bundleDir, 'images'))) // Exclure le dossier 'images'
    .sort((a, b) => b.time - a.time); // Trier par date de modification (plus récent en premier)

  // Garder uniquement le fichier le plus récent
  const latestFile = files[0]?.name;

  // Supprimer tous les fichiers sauf le plus récent
  if (latestFile) {
    const filesToDelete = files.slice(1).map(file => file.path);
    await deleteAsync(filesToDelete);
    console.log('Ancien(s) bundle(s) supprimé(s) :', filesToDelete);
  } else {
    console.log('Aucun fichier à supprimer.');
  }
});


