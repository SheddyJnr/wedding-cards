<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\WeddingGuest;
use Inertia\Inertia;
use Illuminate\Http\RedirectResponse;

class WeddingGuestController extends Controller
{
    public function index()
    {
        return Inertia::render('WeddingGuests', [
            'weddingGuests' => WeddingGuest::all()
        ]);
    }
    public function create() {}

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'name' => 'required|string|max:255',
            'phone_number' => 'required|string|max:255',
        ]);

        WeddingGuest::create($validatedData);



        return redirect(route('dashboard', absolute: false))->with('success', 'Wedding guest added successfully!');
    }

    public function update($id)
    {
        $appUrl = env('APP_URL');

        $guest = WeddingGuest::find($id);

        $invitationLink = $appUrl . '/' . $guest->id . '/' . $guest->name;

        $guest->update([
            'invitation_link' => $invitationLink
        ]);

        return redirect(route('dashboard', absolute: false))->with('success', 'Invitation link successfully generated!');
    }

    public function show($id)
    {
        // Show a specific wedding guest
    }

    public function edit($id)
    {
        // Show form to edit a specific wedding guest
    }

    public function destroy(Request $request): RedirectResponse
    {
        WeddingGuest::destroy($request->id);
        return redirect()->route('dashboard')->with('success', 'Wedding guest deleted successfully!');
    }
}
