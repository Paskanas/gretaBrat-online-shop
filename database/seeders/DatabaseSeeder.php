<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Role;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        //users
        DB::table('users')->insert([
            'name' => 'Greta',
            'email' => 'greta@gmail.com',
            'password' => Hash::make('123'),
            'role' => Role::IS_ADMIN
        ]);

        DB::table('users')->insert([
            'name' => 'User',
            'email' => 'user@gmail.com',
            'password' => Hash::make('123'),
            'role' => Role::IS_USER
        ]);

        $achievements = [
            'Culture3 and TED conference, group exhibition, Vancouver, CA, 2023',
            'Street art exhibition, professionally printed mural by The Vibe Creative District, Virginia, USA, 2023',
            'MArteLive Europe - Multidisciplinary European Contest, winner of the digital Illustration discipline, Rome, Italy, 2022',
            'Art Without a Roof, group exhibition, Vilnius, Lithuania, 2022',
            'MET AMS - metaverse festival, group exhibition, Amsterdam, The Netherlands, 2022',
            '0(v.)returned, group exhibition, @makersplace, 2022',
            'Sweet escape. group exhibition, @makersplace, 2022',
            'Lithuaniania NFT art group exhibition, Klaipėda, Lithuania 2022',
            'Spellbound magazine cover, 2022',
            '“SPRING” Personal outdoor exhibition, Švencionėliai, Lithuania 2022',
            'MArteLive Europe - Multidisciplinary European Contest Semi-final & group exhibition, Vilnius, Lithuania, 2021',
            "Untitled Magazine INNOVATE Collector's Print Issue with a group exhibition, New York, USA, 2021",
            'Crypto art fair AR group exhibition, New York, USA,',
            '2021 Art Without a Roof, group exhibition, Vilnius, Lithuania, 2021',
            'Artifacts of the metaverse, group exhibition, Denver, USA, 2021',
            'Member of @depthcore an international art collective, 2021'
        ];

        foreach (array_reverse($achievements) as $achievement) {
            DB::table('achievements')->insert([
                'achievement' => $achievement,
            ]);
        }
    }
}
