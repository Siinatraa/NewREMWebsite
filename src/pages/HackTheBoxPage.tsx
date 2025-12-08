
import { Bug, ChevronDown, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export function HackTheBoxPage() {
  const [expandedSections, setExpandedSections] = useState<string[]>(['easy']);
  const [expandedWriteups, setExpandedWriteups] = useState<string[]>([]);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const toggleWriteup = (writeup: string) => {
    setExpandedWriteups(prev => 
      prev.includes(writeup) 
        ? prev.filter(w => w !== writeup)
        : [...prev, writeup]
    );
  };

  return (
    <div className="content-wrapper py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 mb-6">
            <Bug className="w-8 h-8 text-primary" />
          </div>
          <h1 className="glow-text mb-4">Hack the Box</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Sherlock CTF write-ups and analysis documenting my journey through malware analysis challenges
          </p>
        </div>

        {/* Easy Difficulty Section */}
        <div className="tech-card mb-6 animate-fade-in" style={{ animationDelay: '100ms' }}>
          <button
            onClick={() => toggleSection('easy')}
            className="w-full flex items-center justify-between text-left p-6 hover:bg-muted/30 transition-colors rounded-lg"
          >
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-md text-sm font-semibold">EASY</span>
              <h2 className="text-2xl font-bold">Easy Challenges</h2>
            </div>
            {expandedSections.includes('easy') ? <ChevronDown className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
          </button>
          
          {expandedSections.includes('easy') && (
            <div className="px-6 pb-6">
              {/* Training Day Write-up */}
              <div className="mt-6 border border-border rounded-lg overflow-hidden mb-6">
                <button
                  onClick={() => toggleWriteup('training-day')}
                  className="w-full flex items-center justify-between text-left p-4 bg-muted/30 hover:bg-muted/50 transition-colors"
                >
                  <h3 className="text-xl font-semibold text-primary">Training Day</h3>
                  {expandedWriteups.includes('training-day') ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                </button>
                
                {expandedWriteups.includes('training-day') && (
                  <div className="p-6 space-y-8 bg-card">
                    {/* Question 1 */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-secondary">Question 1</h4>
                      <p className="text-foreground/80">What is the sha256 hash for "arguement_baby_1.exe"?</p>
                      <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary">
                        <p className="font-mono text-sm text-primary break-all">DC6267608DDFCC5C80571CCD46475A03FB667BAF8620D0E91C93CCACACF97EF6</p>
                      </div>
                      <p className="text-foreground/70 text-sm">You can do this multiple ways, I chose to put this in pestudio as it not only gives us the hash but also displays other information about the executable. It is the blue underlined text.</p>
                      <img src="https://cdn-ai.onspace.ai/onspace/files/KDYtfs9mDhJeXVRojXNBdp/image.png" alt="SHA256 hash in pestudio" className="rounded-lg border border-border w-full" />
                    </div>

                    {/* Question 2 */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-secondary">Question 2</h4>
                      <p className="text-foreground/80">Can you find development environment of malware author (e.g:ide)?</p>
                      <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary">
                        <p className="font-mono text-sm text-primary">Visual Studio</p>
                      </div>
                      <p className="text-foreground/70 text-sm">pestudio also shows what compiled it too! It highlighted below.</p>
                      <img src="https://cdn-ai.onspace.ai/onspace/files/h8Qist95Fvzw3kEqzUQJGG/image_(1).png" alt="Visual Studio compiler info" className="rounded-lg border border-border w-full" />
                    </div>

                    {/* Question 3 */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-secondary">Question 3</h4>
                      <p className="text-foreground/80">What CPU architecture was argument_baby_1.exe compiled for?</p>
                      <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary">
                        <p className="font-mono text-sm text-primary">32 Bit</p>
                      </div>
                      <p className="text-foreground/70 text-sm">While still in pestudio we can click on "indicators" and look for "File Type", in the highlighted area this shows us CPU Architecture which is 32 bit.</p>
                      <img src="https://cdn-ai.onspace.ai/onspace/files/CM9xDZhHCMNfyYvuXZviGj/image_(2).png" alt="CPU architecture" className="rounded-lg border border-border w-full" />
                    </div>

                    {/* Question 4 */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-secondary">Question 4</h4>
                      <p className="text-foreground/80">Is argument_baby_1.exe a symbol-stripped binary?</p>
                      <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary">
                        <p className="font-mono text-sm text-primary">False</p>
                      </div>
                      <p className="text-foreground/70 text-sm">Going to the "File Header" section in pestudio we see a property called "debug stripped", this will tell us if it was symbol stripped or not and in our case it comes back as false.</p>
                      <img src="https://cdn-ai.onspace.ai/onspace/files/R4p57xFiBvWGFXLLv2CVUW/image_(3).png" alt="Symbol stripped check" className="rounded-lg border border-border w-full" />
                    </div>

                    {/* Question 5 */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-secondary">Question 5</h4>
                      <p className="text-foreground/80">Retrieve the full PDB file path from the debug information of argument_baby_1.exe</p>
                      <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary">
                        <p className="font-mono text-sm text-primary">C:\Users\HTB\Desktop\argument\Release\argument.pdb</p>
                      </div>
                      <p className="text-foreground/70 text-sm">We can find this by clicking at the root of the tree and see "debug &gt; file". This will tell us the full path to the PDB file for argument_baby_1.exe. A basic overview of a PDB file is its essentially used for debugging an executable that maps back the compiled machine code to the original source code.</p>
                      <img src="https://cdn-ai.onspace.ai/onspace/files/N3AVLdS3cQT8wyc6EnVmUt/image_(4).png" alt="PDB file path" className="rounded-lg border border-border w-full" />
                    </div>

                    {/* Question 6 */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-secondary">Question 6</h4>
                      <p className="text-foreground/80">The malware author was using a Windows OS. What was the associated username?</p>
                      <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary">
                        <p className="font-mono text-sm text-primary">HTB</p>
                      </div>
                      <p className="text-foreground/70 text-sm">This also relates to the screenshot above, the username in the file path is always after C:\Users\... and in our case it's HTB.</p>
                    </div>

                    {/* Question 7 */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-secondary">Question 7</h4>
                      <p className="text-foreground/80">What calling convention is used in argument_baby_1.exe?</p>
                      <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary">
                        <p className="font-mono text-sm text-primary">cdecl</p>
                      </div>
                      <p className="text-foreground/70 text-sm">I had to do a little research of what exactly a Calling Convention was but it's the sequence of how the assembly instructions are generated for functions. For example, when a function is called, the compiler generates code that pushes arguments onto the stack in a specific order which typically is right to left. With this I realized what it was talking about and loaded up Ghidra. I went to a random function and found it, you can find them on all functions. The screenshot encapsulates 3 different functions, the calling convention is highlighted.</p>
                      <img src="https://cdn-ai.onspace.ai/onspace/files/2XY82iA5xsajC6DWtYskp6/image_(5).png" alt="Calling convention" className="rounded-lg border border-border w-full" />
                    </div>

                    {/* Question 8 */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-secondary">Question 8</h4>
                      <p className="text-foreground/80">How is the 1st-5th argument passed to the function in argument_baby_1.exe?</p>
                      <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary space-y-1">
                        <p className="font-mono text-sm text-primary">ESP</p>
                        <p className="font-mono text-sm text-primary">ESP+4</p>
                        <p className="font-mono text-sm text-primary">ESP+8</p>
                        <p className="font-mono text-sm text-primary">ESP+C</p>
                        <p className="font-mono text-sm text-primary">ESP+10</p>
                      </div>
                      <img src="https://cdn-ai.onspace.ai/onspace/files/j36DsgCmXQLhVRPLWvwmwq/image_(6).png" alt="Entry point" className="rounded-lg border border-border w-full" />
                      <p className="text-foreground/70 text-sm">Now this question seems very vague and I had to piece some things together with trial and error. So with Ghidra opened, the "param_X" are arguments, we use this as our base in the first part of the question. Now we know how to identify arguments, where do we start? We start at the entry point of the executable, this is where the program actually starts execution. Even though it's not labeled as a param, ESP, is the 1st argument passed to the function. You push EBP to the stack and MOV ESP into EBP. ESP is our first argument passed to the function.</p>
                      <img src="https://cdn-ai.onspace.ai/onspace/files/AZSdb7WmzDstm4JvLqh4iS/image_(7).png" alt="Parameters" className="rounded-lg border border-border w-full" />
                      <p className="text-foreground/70 text-sm">Now this next part was a little confusing and spent a little while pulling out my hair. Looking at the Param_1 and Param_2 these are the 2nd and 3rd arguments passed. You see the Hex 0x4 and 0x8, these are our answers. You take ESP and 0x4, drop the 0x for a + and you have ESP+4. You do this for the other params by scrolling down until you see Param_3 and 4. (Scroll pass the other functions)</p>
                    </div>

                    {/* Question 9 */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-secondary">Question 9</h4>
                      <p className="text-foreground/80">Which CPU register holds the function's return value in argument_baby_1.exe?</p>
                      <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary">
                        <p className="font-mono text-sm text-primary">EAX</p>
                      </div>
                      <p className="text-foreground/70 text-sm">With the question being vague again, it took some trial and error but was able to get it figured out. MOV EAX, dword ptr [EBP + Param_1]</p>
                      <p className="text-foreground/70 text-sm">This is basically saying the value of whatever is at the memory address of [EBP + Param_1] is being moved into EAX. EAX is CPU register, therefore EAX is the CPU Register the returns the value. Typically the return value of a function is stored in EAX.</p>
                    </div>

                    {/* Question 10 */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-secondary">Question 10</h4>
                      <p className="text-foreground/80">What calling convention is used in argument_baby_2.exe?</p>
                      <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary">
                        <p className="font-mono text-sm text-primary">Fastcall</p>
                      </div>
                      <img src="https://cdn-ai.onspace.ai/onspace/files/igwomC5jfri4XQyBtb7Ndp/image_(8).png" alt="Fastcall convention" className="rounded-lg border border-border w-full" />
                    </div>

                    {/* Question 11 */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-secondary">Question 11</h4>
                      <p className="text-foreground/80">How is the 1st-4th argument passed to the function in argument_baby_2.exe?</p>
                      <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary space-y-1">
                        <p className="font-mono text-sm text-primary">ECX</p>
                        <p className="font-mono text-sm text-primary">EDX</p>
                        <p className="font-mono text-sm text-primary">ESP+4</p>
                        <p className="font-mono text-sm text-primary">ESP+8</p>
                      </div>
                      <p className="text-foreground/70 text-sm">To find the 1st Argument in a function you first start at the entry and find a function that has a lot of shit in it. For Baby 2 this is FUN_00401100. Since we know in Ghidra Param_X are arguments and the main function has a lot of shit in it near the entry point, the answers are looking right at us.</p>
                      <img src="https://cdn-ai.onspace.ai/onspace/files/QZ5h7z2XduFDfYcvb4Li6P/image_(9).png" alt="Baby 2 parameters" className="rounded-lg border border-border w-full" />
                    </div>

                    {/* Question 12 */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-secondary">Question 12</h4>
                      <p className="text-foreground/80">What CPU architecture was argument_baby_3.exe compiled for?</p>
                      <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary">
                        <p className="font-mono text-sm text-primary">64 bit</p>
                      </div>
                      <p className="text-foreground/70 text-sm">We put it in pestudio to get our answer.</p>
                      <img src="https://cdn-ai.onspace.ai/onspace/files/NjwhLhYPUxr5sgtshhRoiZ/image_(10).png" alt="64-bit architecture" className="rounded-lg border border-border w-full" />
                    </div>

                    {/* Question 13 */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-secondary">Question 13</h4>
                      <p className="text-foreground/80">How is the 1st-4th argument passed to the function in argument_baby_3.exe?</p>
                      <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary space-y-1">
                        <p className="font-mono text-sm text-primary">RCX</p>
                        <p className="font-mono text-sm text-primary">RDX</p>
                        <p className="font-mono text-sm text-primary">R8</p>
                        <p className="font-mono text-sm text-primary">R9</p>
                      </div>
                      <p className="text-foreground/70 text-sm">Again find the main function near the entry with a lot of shit in it, this case is FUN_140001070.</p>
                      <img src="https://cdn-ai.onspace.ai/onspace/files/VT8Bju7M8qiizU67TWLxHe/image_(11).png" alt="Baby 3 parameters" className="rounded-lg border border-border w-full" />
                    </div>

                    {/* Question 14 */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-secondary">Question 14</h4>
                      <p className="text-foreground/80">In the case of argument_baby_3.exe, which CPU register stores the function's return value?</p>
                      <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary">
                        <p className="font-mono text-sm text-primary">RAX</p>
                      </div>
                      <p className="text-foreground/70 text-sm">It is stored in the RAX Register. Why? This is a x64 Bit Executable, when a function stores a return value it's always in the RAX Register. In x32 Bit Executables the return value is EAX Register.</p>
                    </div>

                    {/* Review Section */}
                    <div className="mt-8 p-6 bg-primary/10 border border-primary/30 rounded-lg">
                      <h4 className="text-xl font-bold text-primary mb-4">Review</h4>
                      <p className="text-foreground/80 leading-relaxed">
                        It started off easy with a static analysis via pestudio but quickly destroyed any ego I had as soon as I loaded the first executable in Ghidra. Going through this it was incredibly difficult at first but I learned A LOT from this sherlock. As someone who's dabbled with Ghidra and Assembly it is still very confusing but I've been able to pick apart pieces one by one as time goes on. As I go further into my Reverse Engineering pathway it gets a little easier every time. Once I understood what the questions were asking and how to find the answers I feel like if I restarted I would be able to knock this out in like 10 - 15 minutes. To be honest I used the walkthrough for the first half until it clicked in my mind. Although I used the walkthrough and could have just copy and pasted the answers I'm here to learn, I wanted to understand the "Why" behind them. The walkthrough did a terrible job with helping explaining what was going on making multiple leaps in logic I originally did not understand.
                      </p>
                    </div>

                    {/* What I Learned Section */}
                    <div className="mt-6 p-6 bg-secondary/10 border border-secondary/30 rounded-lg">
                      <h4 className="text-xl font-bold text-secondary mb-4">What I Learned</h4>
                      <div className="space-y-4 text-foreground/80">
                        <p className="leading-relaxed">
                          I had several moments of "I just don't understand" to the "Aha!" moment where everything clicks.
                        </p>
                        
                        <div className="space-y-3">
                          <p className="font-semibold text-foreground">1. Finding Arguments in Ghidra</p>
                          <p className="leading-relaxed">
                            My first moment of this was as soon as I loaded the first executable in Ghidra, "How is the first Argument passed into the function" killed me. How do you find the first Argument? Is this in the first Function? How, How, HOW? I had so many questions and started banging my head against the wall. To be honest it wasn't until I got halfway through examining the second executable everything clicked. What made it click? I broke it down into several pieces when re-examining the first .exe answers to the second. So in Ghidra, Arguments are labeled as "params_X", this was my starting point. After doing some research on Arguments in Assembly I came across something along the lines of "To find the main function of an executable look near the entry point and for a lot of arguments (params_X) in a function." Now is this always true, probably not but for us it worked great. I simply went down each function after the entry point until I found one that had a lot of "params_X" on it. Since I already saw the answers I made the connection that [Stack:0x4] = ESP+4 param_2, [Stack:0x8] = ESP+8 param_3, etc… which were the 2nd, 3rd, etc… arguments passed into the function. With this clicking, I went to test my developing theory on the third executable's arguments and I was correct!
                          </p>
                        </div>

                        <div className="space-y-3">
                          <p className="font-semibold text-foreground">2. x32 vs x64 Return Values</p>
                          <p className="leading-relaxed">
                            One of the other major things I learned as well is the small but important difference in x64 and x32 executables and how they return values into a function. In x32 the return value of whatever the function is doing is stored into the EAX Register, in x64 bit executable this value is stored in the RAX Register. I didn't know this beforehand and something I will stick in the back of my mind for later.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Lockpick Write-up */}
              <div className="mt-6 border border-border rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleWriteup('lockpick')}
                  className="w-full flex items-center justify-between text-left p-4 bg-muted/30 hover:bg-muted/50 transition-colors"
                >
                  <h3 className="text-xl font-semibold text-primary">Lockpick</h3>
                  {expandedWriteups.includes('lockpick') ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                </button>
                
                {expandedWriteups.includes('lockpick') && (
                  <div className="p-6 space-y-8 bg-card">
                    {/* Question 1 */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-secondary">Question 1</h4>
                      <p className="text-foreground/80">Please confirm the encryption key string utilised for the encryption of the files provided?</p>
                      <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary">
                        <p className="font-mono text-sm text-primary">bhUlIshutrea98liOp</p>
                      </div>
                      <p className="text-foreground/70 text-sm">First thing I did was open the files I could in the zip to get an idea of what we're dealing with because it came with a lot of files. After getting a basic pre-analysis done I did find any useful strings so I put in Ghidra. How I found the encryption string was I went to the main function and figured it would be around there. Lucky enough they stuck right at the beginning for us to see.</p>
                      <img src="https://cdn-ai.onspace.ai/onspace/files/LpKwX7Rotsh7cLPdhzQTNj/image.png" alt="Encryption key in Ghidra" className="rounded-lg border border-border w-full" />
                    </div>

                    {/* Question 2 */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-secondary">Question 2</h4>
                      <p className="text-foreground/80">We have recently received an email from wbevansn1@cocolog-nifty.com demanding to know the first and last name we have him registered as. They believe they made a mistake in the application process. Please confirm the first and last name of this applicant.</p>
                      <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary">
                        <p className="font-mono text-sm text-primary">Walden Bevans</p>
                      </div>
                      <p className="text-foreground/70 text-sm">I was very confused as to what this meant but after looking at the encrypted documents provided and the questions I realized I have to figured out how to Decrypt these. Let's go down this rabbit hole.</p>
                      <p className="text-foreground/70 text-sm">Using the great tools of the modern age I asked AI to create me a BES24 decryption, all you need is the encryption key and it takes care of it all for you. All now search the email provided and we get:</p>
                      <img src="https://cdn-ai.onspace.ai/onspace/files/MkrwsR2sqKVzV2st6ww2wy/image_(1).png" alt="Decryption script" className="rounded-lg border border-border w-full" />
                      <img src="https://cdn-ai.onspace.ai/onspace/files/DVdwLqCatkzbCMPu7MFoMq/image_(2).png" alt="Search results" className="rounded-lg border border-border w-full mt-4" />
                    </div>

                    {/* Question 3 */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-secondary">Question 3</h4>
                      <p className="text-foreground/80">What is the email address of the attacker?</p>
                      <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary">
                        <p className="font-mono text-sm text-primary">bes24@protonmail.com</p>
                      </div>
                      <p className="text-foreground/70 text-sm">The email address of the hackers is pretty easy, just open up any of the note.txt files and you'll find it.</p>
                      <img src="https://cdn-ai.onspace.ai/onspace/files/d2JG3bxfn6pYofgPq3ej2Q/image_(3).png" alt="Attacker email" className="rounded-lg border border-border w-full" />
                    </div>

                    {/* Question 4 */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-secondary">Question 4</h4>
                      <p className="text-foreground/80">City of London Police have suspicions of some insider trading taking part within our trading organisation. Please confirm the email address of the person with the highest profit percentage in a single trade alongside the profit percentage (to 25 decimal places).</p>
                      <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary">
                        <p className="font-mono text-sm text-primary break-all">fmosedale17a@bizjournals.com, 142303.1996053929628411706675436</p>
                      </div>
                      <p className="text-foreground/70 text-sm">Thank goodness for AI as I was not gonna parse the giant JSON file and do mathematical calculations, I had it write a script for me so I could extract the name, email, and their percentage.</p>
                      <img src="https://cdn-ai.onspace.ai/onspace/files/KcbntbQZntprbKzCNqJA8E/image_(4).png" alt="Highest profit trader" className="rounded-lg border border-border w-full" />
                    </div>

                    {/* Question 5 */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-secondary">Question 5</h4>
                      <p className="text-foreground/80">What is the MAC address and serial number of the laptop assigned to Hart Manifould?</p>
                      <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary">
                        <p className="font-mono text-sm text-primary">E8-16-DF-E7-52-48, 1316262</p>
                      </div>
                      <p className="text-foreground/70 text-sm">With the decrypted files we search for Hart Manifould and find his MAC and Serial Number.</p>
                      <img src="https://cdn-ai.onspace.ai/onspace/files/PeZKz363X2oCEfLaJaMLgc/image_(5).png" alt="Hart Manifould MAC and Serial" className="rounded-lg border border-border w-full" />
                    </div>

                    {/* Question 6 */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-secondary">Question 6</h4>
                      <p className="text-foreground/80">Our E-Discovery team would like to confirm the IP address detailed in the Sales Forecast log for a user who is suspected of sharing their account with a colleague. Please confirm the IP address for Karylin O'Hederscoll.</p>
                      <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary">
                        <p className="font-mono text-sm text-primary">8.254.104.208</p>
                      </div>
                      <p className="text-foreground/70 text-sm">Search Hederscoll in the Sales Forecast and we find our answer.</p>
                      <img src="https://cdn-ai.onspace.ai/onspace/files/isDrQ4YiGTomx6V7xi3gUf/image_(6).png" alt="IP address search" className="rounded-lg border border-border w-full" />
                    </div>

                    {/* Question 7 */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-secondary">Question 7</h4>
                      <p className="text-foreground/80">Which of the following file extensions is not targeted by the malware? .txt, .sql, .ppt, .pdf, .docx, .xlsx, .csv, .json, .xml</p>
                      <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary">
                        <p className="font-mono text-sm text-primary">.ppt</p>
                      </div>
                      <p className="text-foreground/70 text-sm">Looking at the code in Ghidra we can see what file types are targeted and it's pretty easy to see that .ppt was not harvested.</p>
                      <img src="https://cdn-ai.onspace.ai/onspace/files/FLrKEsjJnmtjHuGATX2giW/image_(7).png" alt="File extensions in code" className="rounded-lg border border-border w-full" />
                    </div>

                    {/* Question 8 */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-secondary">Question 8</h4>
                      <p className="text-foreground/80">We need to confirm the integrity of the files once decrypted. Please confirm the MD5 hash of the applicants DB.</p>
                      <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary">
                        <p className="font-mono text-sm text-primary">F3894AF4F1FFA42B3A379DDDBA384405</p>
                      </div>
                      <p className="text-foreground/70 text-sm">There are multiple ways to grab a hash of a file. I'm running FlareVM so I was able to left click and select MD5 Hash from the provided menu.</p>
                      <img src="https://cdn-ai.onspace.ai/onspace/files/dD6L6EVLD7WMudD9mkYWgL/Applicants_DB_hash.png" alt="Applicants DB hash" className="rounded-lg border border-border w-full" />
                    </div>

                    {/* Question 9 */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-secondary">Question 9</h4>
                      <p className="text-foreground/80">We need to confirm the integrity of the files once decrypted. Please confirm the MD5 hash of the trading backup.</p>
                      <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary">
                        <p className="font-mono text-sm text-primary">87BAA3A12068C471C3320B7F41235669</p>
                      </div>
                      <img src="https://cdn-ai.onspace.ai/onspace/files/YZNpDttycfc3JbfXxDYQHT/Trading_Backup_Hash.png" alt="Trading backup hash" className="rounded-lg border border-border w-full" />
                    </div>

                    {/* Question 10 */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-secondary">Question 10</h4>
                      <p className="text-foreground/80">We need to confirm the integrity of the files once decrypted. Please confirm the MD5 hash of the complaints file.</p>
                      <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary">
                        <p className="font-mono text-sm text-primary">C3F05980D9BD945446F8A21BAFDBF4E7</p>
                      </div>
                      <img src="https://cdn-ai.onspace.ai/onspace/files/N9Jtpv9ge6WHm4mNVnq7N3/Complaints_File_Hash.png" alt="Complaints file hash" className="rounded-lg border border-border w-full" />
                    </div>

                    {/* Review Section */}
                    <div className="mt-8 p-6 bg-primary/10 border border-primary/30 rounded-lg">
                      <h4 className="text-xl font-bold text-primary mb-4">Review</h4>
                      <p className="text-foreground/80 leading-relaxed">
                        I would honestly say this was pretty easy, the first question I was worried it was gonna be a "mislabeled room" (What I call a room that doesn't match its difficulty) but it turned out okay. I've been working a lot with Ghidra and I'm glad I was able to lock onto the first answer pretty quickly.
                      </p>
                    </div>

                    {/* What I Learned Section */}
                    <div className="mt-6 p-6 bg-secondary/10 border border-secondary/30 rounded-lg">
                      <h4 className="text-xl font-bold text-secondary mb-4">What I Learned</h4>
                      <div className="space-y-4 text-foreground/80">
                        <div className="space-y-3">
                          <p className="font-semibold text-foreground">1. Decrypting Basic Ransomware</p>
                          <p className="leading-relaxed">
                            One thing I can take away from this is now I know how to decrypt *very basic* ransomware with Python which is pretty cool even though AI carried me through the scripting part. At first I wasn't sure this was gonna be the right way to go about the Q&A as I thought this was more of an advanced technique but it was just at the right level to figure everything else.
                          </p>
                        </div>

                        <div className="space-y-3">
                          <p className="font-semibold text-foreground">2. ELF File Structure</p>
                          <p className="leading-relaxed">
                            Another thing I learned is how .elf looks/structure in Ghidra and what makes them up in Disassembly as up until this point I've only messed with Windows Executables. Made a good practice and skill sharpening exercise!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Medium Difficulty Section */}
        <div className="tech-card mb-6 animate-fade-in" style={{ animationDelay: '200ms' }}>
          <button
            onClick={() => toggleSection('medium')}
            className="w-full flex items-center justify-between text-left p-6 hover:bg-muted/30 transition-colors rounded-lg"
          >
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-md text-sm font-semibold">MEDIUM</span>
              <h2 className="text-2xl font-bold">Medium Challenges</h2>
            </div>
            {expandedSections.includes('medium') ? <ChevronDown className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
          </button>
          
          {expandedSections.includes('medium') && (
            <div className="px-6 pb-6">
              <p className="text-muted-foreground text-center py-8">Medium difficulty write-ups coming soon...</p>
            </div>
          )}
        </div>

        {/* Hard Difficulty Section */}
        <div className="tech-card mb-6 animate-fade-in" style={{ animationDelay: '300ms' }}>
          <button
            onClick={() => toggleSection('hard')}
            className="w-full flex items-center justify-between text-left p-6 hover:bg-muted/30 transition-colors rounded-lg"
          >
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-md text-sm font-semibold">HARD</span>
              <h2 className="text-2xl font-bold">Hard Challenges</h2>
            </div>
            {expandedSections.includes('hard') ? <ChevronDown className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
          </button>
          
          {expandedSections.includes('hard') && (
            <div className="px-6 pb-6">
              <p className="text-muted-foreground text-center py-8">Hard difficulty write-ups coming soon...</p>
            </div>
          )}
        </div>

        {/* Insane Difficulty Section */}
        <div className="tech-card mb-6 animate-fade-in" style={{ animationDelay: '400ms' }}>
          <button
            onClick={() => toggleSection('insane')}
            className="w-full flex items-center justify-between text-left p-6 hover:bg-muted/30 transition-colors rounded-lg"
          >
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-md text-sm font-semibold">INSANE</span>
              <h2 className="text-2xl font-bold">Insane Challenges</h2>
            </div>
            {expandedSections.includes('insane') ? <ChevronDown className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
          </button>
          
          {expandedSections.includes('insane') && (
            <div className="px-6 pb-6">
              <p className="text-muted-foreground text-center py-8">Insane difficulty write-ups coming soon...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
