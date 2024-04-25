<article class="sub-top">
  <div class="inner">
  <hgroup>
    <h2><?=$$PageName->tit?></h2>
     <?php
     if(isset($SubName)){ ?>
      <h3><?=$$SubName->tit?></h3>
     <?php }
     ?>
     <?php
     if(isset($ContentName)){ ?>
      <h4><?=$$ContentName->tit?></h4>
      <?php }
      ?>
  </hgroup>
  </div>
</article>