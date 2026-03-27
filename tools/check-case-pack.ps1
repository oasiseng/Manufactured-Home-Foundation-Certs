param(
    [string]$ExamplesPath = "examples/sanitized"
)

$requiredTopLevelKeys = @(
    'case_id',
    'classification',
    'property',
    'contacts',
    'evidence',
    'review',
    'dispatch',
    'deliverables',
    'privacy'
)

$allowedOutcomes = @(
    'remote_review',
    'request_more_evidence',
    'site_tech_dispatch'
)

$caseFiles = Get-ChildItem -Path $ExamplesPath -Filter *.case.yaml -File -ErrorAction Stop

if (-not $caseFiles) {
    Write-Error "No case files were found under $ExamplesPath"
    exit 1
}

$hasErrors = $false

foreach ($file in $caseFiles) {
    $content = Get-Content -Path $file.FullName -Raw
    $missingKeys = @()

    foreach ($key in $requiredTopLevelKeys) {
        if ($content -notmatch "(?m)^${key}:") {
            $missingKeys += $key
        }
    }

    $outcomeMatch = [regex]::Match($content, '(?m)^\s*outcome:\s*([a-z_]+)\s*$')
    $classificationMatch = [regex]::Match($content, '(?m)^\s*classification:\s*([a-z_]+)\s*$')

    if ($missingKeys.Count -gt 0) {
        Write-Host "FAIL $($file.Name): missing keys -> $($missingKeys -join ', ')"
        $hasErrors = $true
        continue
    }

    if (-not $classificationMatch.Success) {
        Write-Host "FAIL $($file.Name): classification missing or malformed"
        $hasErrors = $true
        continue
    }

    if (-not $outcomeMatch.Success) {
        Write-Host "FAIL $($file.Name): dispatch outcome missing or malformed"
        $hasErrors = $true
        continue
    }

    if ($allowedOutcomes -notcontains $outcomeMatch.Groups[1].Value) {
        Write-Host "FAIL $($file.Name): invalid outcome '$($outcomeMatch.Groups[1].Value)'"
        $hasErrors = $true
        continue
    }

    Write-Host "PASS $($file.Name): classification=$($classificationMatch.Groups[1].Value) outcome=$($outcomeMatch.Groups[1].Value)"
}

if ($hasErrors) {
    exit 1
}

Write-Host "All sanitized case files passed the baseline structure check."
