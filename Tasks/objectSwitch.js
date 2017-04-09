var method = {
    'view':         SomeService.saveViewItem,
    'custom':       SomeService.saveCustomItem,
    'registration': SomeService.saveRegItem,
    'buy':          SomeService.createBuyItem,
    'external':     SomeService.saveExtItem,
    'gift':         SomeService.saveGiftItem
}[$scope.item.type];
