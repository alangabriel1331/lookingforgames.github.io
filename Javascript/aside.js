fetch('https://valorant-api.com/v1/bundles')
  .then(response => response.json())
  .then(data => {
    const bundlesList = document.getElementById('bundles-list');
    const bundles = data.data;

    for (let i = 0; i < 7 && i < bundles.length; i++) {
      const bundle = bundles[i];
      
      const li = document.createElement('li');
      const displayName = document.createElement('p');
      displayName.textContent = bundle.displayName;
      
      const displayIcon = document.createElement('img');
      displayIcon.src = bundle.displayIcon;
      
            
      li.appendChild(displayName);
      li.appendChild(displayIcon);
      
      bundlesList.appendChild(li);
    }
  })
  .catch(error => {
    console.log(error);
  });