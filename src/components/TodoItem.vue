<template>
    <div class="item">
        <div class="todo-title-container">
            <h3>
                <slot name="title"></slot>
            </h3>
        </div>

        <div class="details">
           
            <slot></slot>
            <hr />
             <i>
                Due On: <slot name="dueDate"></slot>
            </i>
            <button class="completed-button"></button> 
        </div>
    </div>
</template>

<style scoped>
.item {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: left;
  justify-content: left;
}

.details {
  flex: 1;
  text-align: left;
  margin-left: 1rem;
}


h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    display: flex;
    flex-direction: column;
  }

  

  .item:before {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:after {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
}
</style>
