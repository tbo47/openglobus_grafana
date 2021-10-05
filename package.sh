project=3d-map-track
zip=$project-1.0.0.zip
rm -rf dist coverage $zip
npm run build
mv dist/ $project
zip -r $zip $project
rm -rf $project dist coverage
mv $project-*.zip ../../base-images/grafana-launch/
ls -l ../../base-images/grafana/