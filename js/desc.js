
      document.querySelectorAll('.activity__link').forEach(button => {
         button.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('data-target');
            const target = document.getElementById(targetId);
            
            if (target) {
               target.classList.toggle('open');
               
               
               document.querySelectorAll('.activity__full-description.open').forEach(block => {
                  if (block.id !== targetId) {
                     block.classList.remove('open');
                     
                  }
               });

               
               
               
               
            }
         });
      });
   