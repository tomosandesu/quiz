<?php

$id ='1';

$question = 'konni';

// <li data-answer="A">大阪府</li>
// <li data-answer="B">埼玉県</li>
// <li data-answer="C">福岡県</li>
// <li data-answer="D">東京府</li>

$answers = [
    'A' => '大阪府',
    'B' => '埼玉県',
    'C' => '福岡県',
    'D' => '東京都',
];

include __DIR__.'/../template/question.tpl.php';

