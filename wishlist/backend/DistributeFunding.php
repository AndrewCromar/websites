<?php
include_once $_SERVER['DOCUMENT_ROOT'] . '/backend/GetUserItems.php';
include_once $_SERVER['DOCUMENT_ROOT'] . '/backend/AddMoneyToItem.php';

function DistributeFunding($uid, $amount)
{
    if ($amount <= 0) return;

    $items = GetUserItems($uid);
    if (!$items || count($items) === 0) return;

    $remainingList = [];
    $totalRemaining = 0;

    foreach ($items as $item) {
        if ($item['bought']) continue;

        $remaining = max($item['price'] - $item['money_saved'], 0);
        if ($remaining > 0) {
            $remainingList[] = [
                'id' => $item['id'],
                'remaining' => $remaining
            ];
            $totalRemaining += $remaining;
        }
    }

    if ($totalRemaining <= 0) return;

    foreach ($remainingList as $item) {
        $share = ($item['remaining'] / $totalRemaining) * $amount;
        if ($share > 0) {
            AddMoneyToItem($item['id'], $share);
        }
    }
}
